import product_0 from '../images/godofwar.png';
import product_1 from '../images/godofwar4.png';
import product_2 from '../images/metalgearsolid.png';
import product_3 from '../images/metalgearsolid2.png';
import product_4 from '../images/metalgearsolid3.png';
import product_5 from '../images/godofwar4-2.jpg';
import product_6 from '../images/luffy.png';
import product_7 from '../images/luff-2.png';
import product_8 from '../images/luff.png';

export function getProducts() {
    const data = [
      {
        id: '1',
        image: product_2,
        width: 860,
        height: 1127,
        other_images: [product_3, product_4],
        title: 'Naked Snake',
        subtitle: 'metal gear solid',
        price: 'R$ 178',
        about:
          'Naked Snake é um dos personagens mais misteriosos e controversos já criados em uma história de video game. E se você jogou Metal Gear Solid 3: Snake Eater, deve ter percebido isso.',
        especification: 'Altura: 17cm',
        category: 'Games',
      },
      {
        id: '2',
        image: product_1,
        width: 860,
        height: 1127,
        other_images: [product_0, product_5],
        title: 'Kratos',
        subtitle: 'god of war 4',
        price: 'R$ 200',
        about:
          'Kratos é um personagem de jogos eletrônicos da franquia God of War, da Santa Monica Studio, que é baseado nas mitologias grega e nórdica.',
        especification: 'Altura: 17cm',
        category: 'Games',
      },
      {
        id: '3',
        image: product_6,
        width: 860,
        height: 1127,
        other_images: [product_7, product_8],
        title: 'Monkey D. Luffy',
        subtitle: 'one piece',
        price: 'R$ 178',
        about:
          'Monkey D. Luffy é o protagonista do anime e mangá One Piece. Luffy é um pirata que deseja ser o Rei dos Piratas. É o capitão da tripulação do Bando do Chapéu de Palha e líder da Grande Frota dos Chapéus de Palha.',
        especification: 'Altura: 17cm',
        category: 'Animes',
      }
    ];
  
    return data;
  };

export function getCategories() {
  const categories = [
    "All",
    "Games",
    "Animes",
    "Others"
  ]
  return categories
}