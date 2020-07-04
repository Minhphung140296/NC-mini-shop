import React, {FC, useState,useEffect} from 'react'
import { getProduct } from '../Services/getProduct';
import Styled from 'styled-components';
import Button from './Button';

const StyledContent = Styled.div`
    float: flex;
    width: 100%;
    padding:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    box-sizing: border-box;
    padding-left:calc(30 / 1440 * 100vw);
    padding-right:calc(30 / 1440 * 100vw);
    

    & .product-list{
        display: flex;
        flex-flow:row wrap;
        align-item: flex-start;
        justify-content: space-around;
        
    }
`;
const CardStyled = Styled.div`
  width: calc(250 / 1440 * 100vw);
  height: calc(400 / 1440 * 100vw);
  box-sizing: border-box;
  border: 0.064vw solid #e2e2e2;
  border-radius: 0.649vw solid #e2e2e2;
  padding: calc(200px / 100 * 10);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  overflow: hidden;
  margin: 0.649vw;

  & .imgContainer {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: start;
    overflow: hidden;
    margin-bottom: calc(20 / 1440 * 100vw);

    & img {
      width: 100%;
    }
  }

  & span {
    font-size: calc(16 / 1440 * 100vw);
  }

  & .btn-group {
    display: flex;
    flex-direction: column;
    margin-top: calc(15 / 1440 * 100vw);

    & .viewBtn {
      background: #0492c2;
      color: #fff;

      &:hover {
        background: #1f456f;
      }
    }
  }
`;

interface ContentProps{}
interface IProduct{
    id: string;
    name: string;
    image:string;
}
interface CardProps {
    addToCard: () => void;
    data: IProduct;
}

const Card: FC<CardProps> = props =>{
    const { id, name, image} = props.data;
    return (
        <CardStyled>
            <div className='imgContainer'>
                <img src={image} alt={`$[id]- img`} />
            </div>
            <span>{name}</span>
            <div className='btn-group'>
            <Button className="viewBtn">View</Button>
            <Button className="addBtn" onClick={props.addToCard}>
                Add To Card
            </Button>
            </div>
        </CardStyled>
    );
}
const Content: FC<ContentProps> = props => {
    const [card, setCard] = useState<string[]>([]);
    const [product, setProduct] = useState<IProduct[]>([]);

    useEffect(()=>{
        const fetchProduct = async () =>{
            const Data = await getProduct();
            setProduct(Data.data);
        };
        fetchProduct();
    });
    useEffect(()=>{
        console.log(card);   
    }, [card]);
    return (
        <StyledContent>
            <div className='product-list '>
                {
                        product.map((pro : IProduct)=>{
                            return (
                                <Card 
                                    
                                    key={pro.id}
                                    data={pro}
                                    addToCard={()=>{
                                    setCard([...card,pro.id]);
                                }}/>
                            )
                        })
                }  
</div>
           
        </StyledContent>
    );
};
export default Content;