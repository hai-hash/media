import 'bootstrap/dist/css/bootstrap.min.css';
import ItemFirm from './Itemfirm';
import styles from './styles.module.scss';
import {AiFillVideoCamera} from 'react-icons/ai'
const Anime = () =>{
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const display = () =>{
        var result = null;
        if(arr.length > 0){
            result = arr.map((slide,index) =>{
                return (
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"  key={index}>
                      <ItemFirm/>
                    </div>
                )
            })
        }
        return result;
      }
    return(
        <>
        <h1 className={styles.title_series}><AiFillVideoCamera className={styles.icon_series}/>PHIM HOẠT HÌNH ANIME</h1>
        <div class="row">
        {display()}
        </div>
        

        </>
    )
}
export default Anime;