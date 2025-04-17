import { useState, useEffect } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import Job from "./Job"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchJobsAction } from "../redux/actions"

const MainSearch = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchJobsAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const favouriteLength = useSelector((state) => {
    return state.favourites.content.length
  })

  const [query, setQuery] = useState("")
  //const [jobs, setJobs] = useState([])
  const jobs = useSelector((state) => state.results.results)

  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(fetchJobsAction(query))
    //   // try {
    //   //   const response = await fetch(baseEndpoint + query + "&limit=20")
    //   //   if (response.ok) {
    //   //     const { data } = await response.json()
    //   //     setJobs(data)
    //   //   } else {
    //   //     alert("Error fetching results")
    //   //   }
    //   // } catch (error) {
    //   //   console.log(error)
    //   // }
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Button
            onClick={() => navigate("/favourites")}
            className="text-center"
          >
            Preferiti
            <span className="ms-2">{favouriteLength}</span>
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
