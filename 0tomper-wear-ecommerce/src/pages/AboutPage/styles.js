import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  gap: 1rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 1.6;
    font-size:16px;
    max-width: 45em;
    margin: 0 auto;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
  }

  h3{
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: -.02em;
  }

  

`;

export default Wrapper;
