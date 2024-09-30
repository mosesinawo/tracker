
import HomeHero from '../../components/Home/Hero'
import Table from '../../components/Table'
import UserForm from '../../components/UserForm'

const Home = () => {
  return (
    <div>
        <HomeHero />
        {/* <Table/> */}
      <div className='mt-20'>
      <UserForm/>
      </div>
    </div>
  )
}

export default Home