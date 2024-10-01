import React from 'react'
import styled from 'styled-components'
import banner from '../Assets/home1.jpg'
import paris from '../Assets/paris.jpg'
import rome from '../Assets/rome.jpg'

const BannerImage = styled.img`
  margin-top:0px;
  height: 650px;
  width: 100vw;
  object-fit: cover;
  margin-bottom: 50px;
`;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  background-color: #f8f9fa;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardContent = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #34495e;
  line-height: 1.6;
`;

const CardImage = styled.img`
  width: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const Home = () => {
  return (
    <div>
      <BannerImage src={banner} alt="Travel Banner" />

      <Outer>
        <SectionTitle>Popular Places</SectionTitle>
        
        <Card>
          <CardContent>
            <CardTitle>Paris, France</CardTitle>
            <CardDescription>
              Paris, often called "The City of Light," is a dream destination for travelers around the world. 
              It is home to some of the most iconic landmarks, including the Eiffel Tower, 
              a symbol of both French culture and engineering brilliance. 
              Visitors also flock to the Louvre Museum, where masterpieces like the Mona Lisa reside, 
              and to the Notre-Dame Cathedral, renowned for its Gothic architecture.
            </CardDescription>
          </CardContent>
          <CardImage src={paris} alt="Paris" />
        </Card>

        <Card>
          <CardImage src={rome} alt="Rome" />
          <CardContent>
            <CardTitle>Rome, Italy</CardTitle>
            <CardDescription>
              Rome, the Eternal City, is a living museum of history and culture. 
              From the iconic Colosseum and Roman Forum to the stunning Pantheon and Vatican City, 
              Rome offers an unparalleled journey through time. 
              Visitors can toss coins into the Trevi Fountain, indulge in world-famous Italian cuisine, 
              and explore charming neighborhoods like Trastevere. 
              With its blend of ancient wonders and modern vibrancy, Rome continues to captivate travelers from around the globe.
            </CardDescription>
          </CardContent>
        </Card>
      </Outer>
    </div>
  )
}

export default Home