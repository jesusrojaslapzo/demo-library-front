interface CardProps {
  title: string;
  description: string;
  className?: any;
}

const Card = ({ title, description, className }: CardProps) => {
  return (
    <div className={`card-content ${className}`} >
      <i className='bx bx-cube-alt'></i>
      <h3>{title}</h3>
      <p>{description}</p>
      <hr />
      <i className='bx bx-right-arrow-circle'></i>
    </div >
  )
}

export default Card
