import { Studio } from 'sanity'
import config from '../../sanity.config'

const AdminPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Studio config={config} />
    </div>
  )
}

export default AdminPage
