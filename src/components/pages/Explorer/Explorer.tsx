import CourseCard from "@/components/UI/CourseCard"
import styles from './Explorer.module.css'
import Tabs from "@/components/UI/Tabs"
import BreadCrumb from "@/components/UI/BreadCrumb"
import Wrapper from "@/components/Layout/Wrapper"

const COURSE_INFO = [
  {
    image: "https://cdn.discordapp.com/attachments/1181605139610603593/1282820406037708884/1707508883367.png?ex=66e167da&is=66e0165a&hm=922b5293f7fda20ef36990e9097bcc9ba701a692ee76455baa9a2bceaf9f8862&"
  },
  {
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDI5MnwwfDF8c2VhcmNofDI5fHx3YWxscGFwZXJ8ZW58MHx8fHwxNzI1NDY4OTU4fDA&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    image: 'https://res.cloudinary.com/lernit/image/upload/v1667524221/Courses/ibpntamhrotay2ud8yzl.png'
  },
  {
    image: 'https://res.cloudinary.com/lernit/image/upload/v1690828790/Courses/trlj7btfn7s0gvmvcuqm.png'
  },
  {
    image: 'https://images.unsplash.com/photo-1664575602807-e002fc20892c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDI5MnwwfDF8c2VhcmNofDJ8fGJ1c2luZXNzfGVufDB8fHx8MTcyMzQ4MzI4NXww&ixlib=rb-4.0.3&q=80&w=1080'
  },
]

const Explorer = () => {
  return (
    <Wrapper className="home-section-flex">
      <section className={styles.explorerHeader}>
        <BreadCrumb />
        <h1 className={styles.explorerTitle}>Todos los cursos</h1>
      </section>

      <Tabs />
      <section className={styles.explorerCardWrapper}>
        {
          COURSE_INFO.map((item) => (
            <CourseCard image={item.image} />

          ))
        }
      </section>
    </Wrapper>
  )
}

export default Explorer
