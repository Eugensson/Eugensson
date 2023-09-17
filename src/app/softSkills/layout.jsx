import { SoftSkillsList } from "@/components/SoftSkillsList/SoftSkillsList";
import { softSkillsItems } from '@/data';

const SoftSkillsLayout = ({children}) => {
  return (
    <section className="section">
      <h1 className="visuallyHidden">Soft Skills</h1>
      <SoftSkillsList softSkillsLinks={softSkillsItems}/>      
      {children}
    </section>
  );
}

export default SoftSkillsLayout;