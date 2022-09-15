import Posts from "./Posts/Posts";
import SideBar from "./SideBar";
import Stories from "./Stories/Stories";

export default function Corpo() {
  return (
    <main className='all-content'>
      <section className='posts-section'>
        <Stories />
        <Posts />
      </section>
      <section className='sidebar-section'>
        <SideBar />
      </section>
    </main>
  );
}