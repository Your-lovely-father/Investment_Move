/**
 * @Description: 通用接口
 * @author ZhiYuanWang
 * @date 2020/6/15 13:25
*/
import axios  from '../../utils/request'
export default {
    getNav() {
        return axios.get('Navigation/index')
    }
}
