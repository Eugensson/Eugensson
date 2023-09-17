import Card from "@/components/Card/Card";

import styles from "@/components/CardList/CardList.module.css";

const CardList = ({data}) => {
  return (
    <ul className={styles.list}>
        {data.map(item => {        
            return (
                <li key={item.id}>
                    <Card imageUrl={item.imageUrl} url={item.url} title={item.title} description={item.description}/>                
                </li>
            );
        })}
    </ul>
  )
}

export default CardList;