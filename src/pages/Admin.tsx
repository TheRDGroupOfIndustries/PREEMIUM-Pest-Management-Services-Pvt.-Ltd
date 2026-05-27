import { Studio } from 'sanity'
import config from '../../sanity.config'
import { Seo } from '@/lib/seo'

const AdminPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Seo title="Admin | PREEMIUM" description="Private admin area." path="/admin" noIndex />
      <Studio config={config} />
    </div>
  )
}

export default AdminPage
