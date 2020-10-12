import { useRouter } from 'next/router'

const PortfolioPage = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Post: {id}</p>
}

export default PortfolioPage
