interface WrapperProps {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <section className="home-section">
      {children}
    </section>
  )
}

export default Wrapper
