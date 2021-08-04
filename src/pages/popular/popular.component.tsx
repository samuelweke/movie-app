import Grid from '@material-ui/core/Grid'
import Pagination from '@material-ui/lab/Pagination'
import { useEffect, useState } from 'react'
import { MovieCardSkeleton } from '../../common/movie-card/movie-card-skeleton.component'
import { MovieCard } from '../../common/movie-card/movie-card.component'
import { useAsync } from '../../hooks/useAsync.js'
import { Movies } from '../../types'
import { axiosRequest } from '../../utility/request.utility'
import { usePopularStyles } from './popular.style'

export const Popular = () => {
  const { data, error, status, run } = useAsync()
  const [page, setPage] = useState<number>(1)
  const movies: Movies = data?.data || {}

  useEffect(() => {
    run(
      axiosRequest.get('movie/popular', {
        params: { page },
      }),
    )
  }, [run, page])

  const handlePaginationChange = (e: any, page: number) => setPage(page)

  const loading =
    (status === 'idle' || status === 'pending') &&
    [...new Array(20)].map((m, i) => (
      <Grid key={i} item xs={6} sm={4} md={2} lg={2}>
        <MovieCardSkeleton />
      </Grid>
    ))

  const resolved = status === 'resolved' && (
    <>
      {movies.results.map(movie => (
        <Grid key={movie.id} item xs={6} sm={4} md={2} lg={2}>
          <MovieCard
            title={movie.title}
            posterPath={movie.poster_path}
            date={movie.release_date}
          />
        </Grid>
      ))}

      <Pagination
        page={page}
        count={movies.total_pages}
        color="primary"
        onChange={handlePaginationChange}
      />
    </>
  )

  return (
    <div>
      <div style={{ margin: 10 }}>
        <Grid container spacing={1}>
          {loading}
          {resolved}
        </Grid>
      </div>
    </div>
  )
}
