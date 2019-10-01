import React, {Component} from 'react';
import './styles.css';
import Brand from '../../components/Brand'
import {HOME, screenPaths} from '../../navigation/Routes'
import withRedirect from '../../navigation/withRedirect'
import {
  isMobile
} from "react-device-detect";
import withWindowDimensions from '../../lib/withWindowDimensions'
import BottomBar from '../../components/BottomBar'
import ShayrIcon from '../../assets/images/shayr-icon.png'
import IOSMoreAppIcon from '../../assets/images/ios-more-app-icon.png'
import IOSEnableShayrAction from '../../assets/images/enable-shayr-action.png'
import IOSShareIcon from '../../assets/icons/vector-share-ios.png'
import GoogleShareIcon from '../../assets/icons/vector-share-google.png'
import Arrow from '../../assets/icons/vector-arrow.png'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import Paragraph from '../../components/Paragraph'
import _ from 'underscore'

class HowTo extends Component {

  componentDidMount() {
  }

  onBrandPress = () => {
    this.props.navigateToPath(screenPaths[HOME])
  }
  
  render() {
    return (
      <div className="Screen-container-stretch">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          }}>

        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          width: isMobile? '100%' : Math.min(this.props.windowWidth*.8, 800),
          padding: isMobile? 16 : 0,
          }}>
          <Brand onPress={this.onBrandPress}/>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          }}>
          <img style={{
            height: 192,
            width: 192,
            borderRadius: 19.2,
          }} src={ShayrIcon} alt="shayr-icon"/>
          </div>
          <Title copy='Welcome to Shayr!' style={{marginTop: 16}} />
          
          <Paragraph copy="Shayr makes it easy to discover, and give recommendations for, great content within your network of close friends." />
          <Paragraph copy="Content is always more meaningful when it comes recommended to us from someone we care about. However, finding time to engage with and actually following up on content recommendations is difficult as they are easily lost amongst our digital clutter. Shayr helps you manage content recommendations of any type from all of your friends. Shayr remembers the list of recommendations you’ve been meaning to check out and makes it easy to let your friends know when you’ve finished with something they recommended. On the flipside, after you’ve made a recommendation, Shayr gives you insight into whether your friend plans to check it out and the peace of mind of knowing that when they do, you’ll hear about it." />
          <Paragraph copy="Shayr creates more meaningful interactions between you and your friends by increasing the likelihood that each of you follows through on content recommendations. More meaningful interactions means deeper friendships and a happier you." />
          
          <Title copy='How to Use Shayr' style={{marginTop: 16}} />
          
          <Subtitle copy='Shayring' style={{fontSize: 20, marginTop: 8}} />
          
          <Paragraph copy="The next time you come across content that makes you think of a friend, try Shayring it with them!" />
          <Paragraph copy="To Shayr content from your mobile device:" />
          
          <ol className={'orderedList'}>
            <li className={'orderedListItem'} ><Paragraph copy="Find and tap the app’s share icon." />
              
              <ol className={'orderedList'} type='a'>
                 <li className={'orderedListItem'} >
                   <Paragraph copy="On iOS, this usually looks like:" /> 
                   <img style={{
            height: 18,
            marginLeft: 8
          }} src={IOSShareIcon} alt="iOS-share-icon"/>
                
                </li>
                <li className={'orderedListItem'} ><Paragraph copy="On Android, this usually looks like:" />
                <img style={{
            height: 18,
            marginLeft: 8
          }} src={GoogleShareIcon} alt="google-share-icon"/>
                </li>
              </ol>
            
            </li>
            
            <li className={'orderedListItem'} ><Paragraph copy="Find and tap Shayr from the action sheet." />
              
              <ol className={'orderedList'} type='a'>
                <li className={'orderedListItem'} ><Paragraph copy="On iOS, you may need to first enable the Shayr action by tapping More, then toggling Shayr." />
                <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center'
                }}
                >

                <img style={{
                  height: 48,
                }} src={IOSMoreAppIcon} alt="ios-more-app-icon"/>
          <img style={{
            height: 18,
            marginLeft: 16,
            marginRight: 16,
          }} src={Arrow} alt="arrow"/>
                <img style={{
                  height: 32,
                }} src={IOSEnableShayrAction} alt="enable-shayr-action"/>
          
                </div>
          
          </li>
              </ol>
            
            </li>
            
            <li className={'orderedListItem'} ><Paragraph copy="Then, you can write a comment and choose which friends you’d like to Shayr with! Shayr will handle notifying the friends you choose of your recommendation." />
              
              <ol className={'orderedList'} type='a'>
                <li className={'orderedListItem'} ><Paragraph copy="You can also Shayr a recommendation with anyone not yet on Shayr by inviting them from the same prompt." /></li>
              </ol>
            
            </li>

          </ol>
          
          <Paragraph copy="Shayring content from your desktop is coming soon!" />
          <Paragraph copy="You can also Shayr anything within Shayr itself by tapping the Shayr icon." />
          
          <Subtitle copy='Friending' style={{fontSize: 20, marginTop: 8}} />
          
          <Paragraph copy="Shayr is better with friends." />
          <Paragraph copy="To connect with friends on Shayr:" />
          
          <ol className={'orderedList'}>
            <li className={'orderedListItem'} ><Paragraph copy="Navigate to the Find Friends screen from the My Friends screen by tapping the Find Friends icon in the top right." /></li>
          <li className={'orderedListItem'} ><Paragraph copy="Next, search for your friends by name or connect facebook for suggested friends." />
            </li>
            <li className={'orderedListItem'} >

          <Paragraph copy="After finding your, send them a friend request by tapping the Add icon." />
            </li>
            <li className={'orderedListItem'} >

          <Paragraph copy="If you don’t find who you’re looking for, send them an invite!" />
            </li>

          </ol>
          
          <Subtitle copy='Discovering' style={{fontSize: 20, marginTop: 8}} />
          
          <Paragraph copy="Whenever you have a minute, check Shayr to find great content recommendations from your friends." />
          <Paragraph copy="On the Discover screen, you can find everything your friends have Shayred. When you see something that catches your eye, you can add it to your list by swiping from left-to-write or tapping the Add icon. After you finish with a recommendation, mark the post as done by tapping the Done icon or swiping from left-to-write when viewing your adds list. You can also let your friends know your reaction by commenting -- just tap the Comment icon. After you mark a post as done or comment, the friend who Shayred the recommendation will get notified." />
          <Paragraph copy="You browse the lists of everything you’ve Shayred, added, marked as done, or commented on on the My List screen. You can also view a friend’s lists by tapping on their profile picture." />
        </div>
        </div>
        <BottomBar isMobile={isMobile} />
      </div>
    );
  }
}

export default _.compose(withWindowDimensions, withRedirect)(HowTo);