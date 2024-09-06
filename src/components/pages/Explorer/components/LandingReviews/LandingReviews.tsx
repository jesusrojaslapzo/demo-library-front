import brand from '@/assets/Brand.png'
import star from '@/assets/star.png'

const LandingReviews = () => {
  return (
    <section>
      <div>
        <img src={brand} />
        <span>Tu Plataforma</span>
      </div>
      <div>
        <img src={star} />
        <span>4.81 (252)</span>
      </div>
      <span>New</span>
    </section>
  )
}

export default LandingReviews
