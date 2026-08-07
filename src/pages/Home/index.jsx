import React from 'react';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { coffees } from '../../data/coffees';   // ← nova linha
import { CoffeeCard } from './components/CoffeeCard';
import { HomeContainer, Intro, Title, Items, CoffeeList } from './styles';
import introImg from '../../assets/intro-img.svg';

export function Home() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    api.get('/coffees').then(response => {
      setCoffees(response.data);
    });
  }, []);

  return (
    <HomeContainer>
      <Intro>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </Title>
          <Items>
            <div>
              <ShoppingCart size={26} weight="fill" />
              Compra simples e segura
            </div>
            <div>
              <Package size={26} weight="fill" />
              Embalagem mantém o café intacto
            </div>
            <div>
              <Timer size={26} weight="fill" />
              Entrega rápida e rastreada
            </div>
            <div>
              <Coffee size={26} weight="fill" />
              O café chega fresquinho até você
            </div>
          </Items>
        </div>
        <img src={introImg} alt="" />
      </Intro>

      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </HomeContainer>
  );
}
