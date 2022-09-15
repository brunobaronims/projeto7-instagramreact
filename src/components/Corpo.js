import Posts from "./Posts";
import SideBar from "./SideBar";

function Corpo() {
  return (
    <main className='all-content'>
      <section className='posts-section'>
        <Posts />
      </section>
      <section className='sidebar-section'>
        <SideBar />
      </section>
    </main>
  );
}

export default Corpo;