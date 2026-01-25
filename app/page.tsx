import Resume from './components/Resume';
import resumeData from './data/resumeData.json';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Resume data={resumeData} />
  
    </main>
  );
}