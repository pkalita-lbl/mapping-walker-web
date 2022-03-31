# mapping-walker-web

This project is a simple web interface which wraps around [mapping-walker](https://github.com/monarch-initiative/mapping-walker). It is split into two independent "sub-projects" contained in the `backend` and `frontend` directories.

**! CAUTION !** This project is in early development stages. It is currently designed to run only locally as a demo. Results from `mapping-walker` may take a while to return, and this service is not yet set up to handle many concurrent requests. 

## Backend

The backend uses [FastAPI](https://fastapi.tiangolo.com/). It exposes an endpoint to run the `mapping-walker` pipeline and return the results. It also serves the static files produced as the output of the pipeline.

### Development 

#### Setup

Review the requirements for running [mapping-walker](https://github.com/monarch-initiative/mapping-walker#requirements). Then:

```shell
cd backend
poetry install
```

#### Run

```shell
poetry run uvicorn mapping_walker_web.main:app --reload
```

Once started the API will be available on http://localhost:8000.

#### Docs

Once the development server is running, OpenAPI documemtion will be available at http://localhost:8000/docs.

### Deployment

`TODO`


## Frontend

The frontend is [React](https://reactjs.org/)-based and uses [Vite](https://vitejs.dev/) for development and building.

### Development

#### Setup

```shell
cd frontend
npm install
```

#### Run

Ensure the backend is running. By default the frontend will attempt to talk to a backend at http://localhost:8000. To change this set the `VITE_API_URL` environment variable. Then:

```shell
npm run dev
```

Once started the interface will be available at http://localhost:3000.

### Deployment

`TODO`
