import classes from './Description.module.css';
import profileImage from '../../assets/profile.jpg';
const Description = () => {
  return (
    <>
    <section className={classes.section}>
    <div className={classes['bg-image']}></div>
    <div className={classes.container}>
      <div className={classes['profile-image']}>
        <img src={profileImage} alt="" />
      </div>
      <div>
        <div className={classes['name-author']}>
          <h2 className={classes.name}>Crypto Programmers</h2>
          <p className={classes.author}>By DALL-E</p>
        </div>
        <div className={classes.info}>
          <div>Items <span>100k</span></div>
          <div>Issued <span>March 2020</span></div>
          <div>Owners <span>1354</span></div>
          <div>Chain <span>Polygon</span></div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Description;