

import Button from './components/Button'
import Card from './components/Card';


const eventsData = {}
const collectionsData = {}
const advertisementData = {}

export default function Home() {
  return (
    <main>
    
    <Button id='btn-1' className=''>See More</Button>
    <Button id='btn-2' className=''>See More Button 2</Button>
    <Card variant='event' data={eventsData} />
    <Card variant='advertisement' data={advertisementData} />
    <Card variant='collection' data={collectionsData} />

    </main>
  );
}
