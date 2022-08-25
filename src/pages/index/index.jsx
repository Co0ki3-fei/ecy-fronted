import { Component } from 'react'
import { View, Text, Button} from '@tarojs/components'
import './index.scss'
// eslint-disable-next-line import/first
import urls from "../../data/url";
import {get} from '../../utils/req';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  async getTry(){
    console.log(1)
    let resp = await get(urls.base, {})
    console.log(resp)
    return resp
  }

  render () {
    return (
      <View className='index'>
          {process.env.TARO_ENV === 'weapp' && <Text>wx</Text>}
          {process.env.TARO_ENV === 'qq' && <Text>qq</Text>}
          <Button>hello</Button>
          <Text>{this.getTry().toString()}</Text>
      </View>
      /*
        id 是怎么标的来着
        就之前的
        嗷这样的啊
        直接就是getall啊
        耶耶
      */
    )
  }
}
