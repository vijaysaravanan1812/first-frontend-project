

const HomePage:React.FC = () => {
  return (
      <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis">First Frontend Project</h1>
          <img className="d-block mx-auto mb-4" src="src/images/vijay.jpg" width={72} height={57} />

          <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
              Netflix is an American subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.[6]
                </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Browse Netflix</button>
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">Manage Users</button>
              </div>
          </div>
      </div>

  )
}

export default HomePage