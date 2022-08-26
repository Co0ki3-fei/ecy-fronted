import { Component } from 'react'
import { View, Text, Button} from '@tarojs/components'
import './index.scss'
// eslint-disable-next-line import/first
import urls from "../../data/url";
import {del, get, post, put} from '../../utils/req';
import {clearStore, getStore, rmStore, setStore} from "../../utils/store/store";

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  async getTry(){
    let resp = await get(urls.base, {})
    console.log(resp)
  }

  async postTry(){
    let resp = await post(urls.base, {})
    console.log(resp)
  }

  async putTry(){
    let resp = await put(urls.base, {})
    console.log(resp)
  }

  async deleteTry(){
    let resp = await del(urls.base, {})
    console.log(resp)
  }

  clickCount(){
    if (getStore('count')){
      setStore('count', Number(getStore('count')) + 1)
    }else {
      setStore('count', 1)
    }
  }

  clickToRemoveCount(){
    if (getStore('count')){
      rmStore('count')
    }
  }

  clickToClear(){
    clearStore()
  }

  render () {
    return (
      <View className='index'>
          {process.env.TARO_ENV === 'weapp' && <Text>wx</Text>}
          {process.env.TARO_ENV === 'qq' && <Text>qq</Text>}
          <Button onClick={this.clickCount}>count</Button>
          <Button onClick={this.clickToRemoveCount}>remove</Button>
          <Button onClick={this.clickToClear}>clear</Button>
          <Button onClick={this.getTry}>Get</Button>
          <Button onClick={this.postTry}>Post</Button>
          <Button onClick={this.putTry}>Put</Button>
          <Button onClick={this.deleteTry}>del</Button>

      </View>
    )
  }
}
