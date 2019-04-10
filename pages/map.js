import '../styles/stylesheet.scss'

import Head from '../components/Head'

import NavBar from '../components/NavBar'

const Map = () => (
  <>
    <Head title="HackSC 2019 Live - Map" />

    <NavBar page="map" />

    <div className="container">
      <section className="section">
        Map goes here.
      </section>
    </div>
  </>
)

export default Map
