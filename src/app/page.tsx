

import Button from './components/Button'
import Card from './components/Card';


const eventsData = {}
const collectionsData = {}
const advertisementData = {}
const themeMode = "light"  // we can implement useState function to switch between dark/light mode from this main page.tsx file

export default function Home() {
  return (
    <main>
    
    {/* <Button id='btn-1' className=''>See More</Button>
    <Button id='btn-2' className=''>See More Button 2</Button> */}

    <div className='flex gap-10'>
    <Card themeMode={themeMode} variant='event' data={eventsData} />
    <Card themeMode={themeMode} variant='event' data={eventsData} />
    <Card themeMode={themeMode} variant='event' data={eventsData} />
    <Card themeMode={themeMode} variant='event' data={eventsData} />
    <Card themeMode={themeMode} variant='advertisement' data={advertisementData} />
    </div>
    
    <div>
    <Card themeMode={themeMode} variant='collection' data={collectionsData} />
    <Card themeMode={themeMode} variant='collection' data={collectionsData} />
    <Card themeMode={themeMode} variant='collection' data={collectionsData} />
    
    </div>

    </main>
  );
}
