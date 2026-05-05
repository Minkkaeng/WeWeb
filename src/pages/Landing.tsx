import { Hero } from '../components/Hero'
import { WorkList } from '../components/WorkList'
import { About } from '../components/About'
import { Contact } from '../components/Contact'

export const Landing = () => {
  return (
    <main>
      <Hero />
      <WorkList />
      <About />
      <Contact />
    </main>
  );
};
