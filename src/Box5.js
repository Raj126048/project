import React from 'react'
import  './Box5.css'
import  { useState } from 'react';
import Media from 'react-media';
function Box5() {
    let [toggle,settoggle]=useState(1);
    function handletoggle(num){
        settoggle(num);
        console.log(toggle);
    }
  return (
   <div className="box5">
    <div className="comu">
        <h1>Spotify Communities</h1>
    </div>
    <Media query="(min-width:1190px)">
        {matches=> {return matches ? (
    <div className="tabs">
        <div className="tab">
            <div className={toggle==1?"tab1 isactive":"tab1"} onMouseEnter={()=>handletoggle(1)}><p>For Artists</p></div>
            <div  className={toggle==2?"tab1 isactive":"tab1"}   onMouseEnter={()=>handletoggle(2)}><p>For Podcasters</p></div>
            <div className={toggle==3?"tab1 isactive":"tab1"}  onMouseEnter={()=>handletoggle(3)}><p>For Advertisers</p></div>
            <div  className={toggle==4?"tab1 isactive":"tab1"}  onMouseEnter={()=>handletoggle(4)}><p>Life at Spotify</p></div>
        </div>
        <div className="show">
            <div className={toggle==1?"katu k11 activet":"katu"}>
                <div className="kaatu ">
                <div className='im'>
            <img className='k1' src="https://storage.googleapis.com/pr-newsroom-wp/1/2021/10/icon_artist-full.svg" alt=""/></div>
            <div className="eluthu"><h3>RECENT NEWS</h3>
            <div className="inside">
                <div className="p1">
                <p >Introducing New Audience Segmentation on Spotify for Artists</p>
                </div><div className="p2 p1">
                <p>Making the Most of the ‘Now Playing’ View to Encourage Discovery</p></div></div></div>
            </div></div>

            <div className={toggle==2?"katu k2 activet":"katu k2"}>
            <div className="kaatu">
                <div className='im'>
                <img className='k1'src="https://storage.googleapis.com/pr-newsroom-wp/1/2021/10/icon_podccasters-full.svg" alt=""/></div>
            <div className="eluthu"><h3>RECENT NEWS</h3>
            <div className="inside">
                <div className="p1">
                <p >Your guide to 2022 Podcaster Wrapped</p>
                </div><div className="p2 p1">
                <p>Fan Study, Podcast Edition: The data to help you grow your show</p></div></div></div>
            </div></div>
            <div className={toggle==3?"katu k3 activet":"katu k3"}>
            <div className="kaatu">
                <div className='im'>
                <img className='k1' src="https://storage.googleapis.com/pr-newsroom-wp/1/2021/10/icon_advertisers-full.svg" alt=""/></div>
            <div className="eluthu"><h3>RECENT NEWS</h3>
            <div className="inside">
                <div className="p1">
                <p >Small business marketing ideas: Celebrating Small Business Week</p>
                </div><div className="p2 p1">
                <p>Spotify Brand Lift: Amplify your brand equity with metrics that matter</p></div></div></div>
            </div></div>
            <div className={toggle==4?"katu k4 activet":"katu k4"}>
            <div className="kaatu">
                <div className='im'>
                <img className='k1' src="https://storage.googleapis.com/pr-newsroom-wp/1/2021/10/life-icon-full.svg" alt=""/></div>
            <div className="eluthu"><h3>RECENT NEWS</h3>
            <div className="inside">
                <div className="p1">
                <p >Spotify Inclusion Fika: Featuring Leroy Sanchez</p>
                </div><div className="p2 p1">
                <p>SSpotify ERG Spotlight: Able</p></div></div></div>
            </div></div>
        </div>
    </div>):(<div className="tabs tbss">
    <div className="tab tbs">
        <div className={toggle==1?"tab11 tab1 isactivet":"tab1 "} onMouseEnter={()=>handletoggle(1)}><p>For Artists</p></div>
        <div className={toggle==1?"katu k11 activet":"katu"}>
            <div className="kaatu ">
            <h3 className='ti'>For Artists</h3>
            <div className='im'>
        <img className='k1' src="https://storage.googleapis.com/pr-newsroom-wp/1/2021/10/icon_artist-full.svg" alt=""/></div>
        <div className="eluthu"><h3>RECENT NEWS</h3>
        <div className="inside">
            <div className="p1">
            <p >Introducing New Audience Segmentation on Spotify for Artists</p>
            </div><div className="p2 p1">
            <p>Making the Most of the ‘Now Playing’ View to Encourage Discovery</p></div></div></div>
        </div></div>

        <div  className={toggle==2?"tab12 tab1 isactivet":"tab1"}   onMouseEnter={()=>handletoggle(2)}><p>For Podcasters</p></div>
        
        <div className={toggle==2?"katu k2 activet ac":"katu k2"}>
        
        <div className="kaatu">
        <h3 className='ti'>For Podcasters</h3>
            <div className='im'>
            
            <img className='k1'src="https://storage.googleapis.com/pr-newsroom-wp/1/2021/10/icon_podccasters-full.svg" alt=""/></div>
        <div className="eluthu">
        <h3>RECENT NEWS</h3>
        <div className="inside">
            <div className="p1">
            <p >Your guide to 2022 Podcaster Wrapped</p>
            </div><div className="p2 p1">
            <p>Fan Study, Podcast Edition: The data to help you grow your show</p></div></div></div>
        </div></div>
        <div className={toggle==3?"tab13 tab1 isactivet":"tab1"}  onMouseEnter={()=>handletoggle(3)}><p>For Advertisers</p></div>
        <div className={toggle==3?"katu k3 activet":"katu k3"}>
        <div className="kaatu">
       <h3 className='ti'>For Advertisers</h3>
            <div className='im'>
            <img className='k1' src="https://storage.googleapis.com/pr-newsroom-wp/1/2021/10/icon_advertisers-full.svg" alt=""/></div>
        <div className="eluthu"><h3>RECENT NEWS</h3>
        <div className="inside">
            <div className="p1">
            <p >Small business marketing ideas: Celebrating Small Business Week</p>
            </div><div className="p2 p1">
            <p>Spotify Brand Lift: Amplify your brand equity with metrics that matter</p></div></div></div>
        </div></div>
        <div  className={toggle==4?"tab14 tab1 isactivet":"tab1"}  onMouseEnter={()=>handletoggle(4)}><p>Life at Spotify</p></div>
        <div className={toggle==4?"katu k4 activet":"katu k4"}>
        <div className="kaatu">
        <h3 className='ti'>Life at Spotify</h3>
            <div className='im'>
            <img className='k1' src="https://storage.googleapis.com/pr-newsroom-wp/1/2021/10/life-icon-full.svg" alt=""/></div>
        <div className="eluthu"><h3>RECENT NEWS</h3>
        <div className="inside">
            <div className="p1">
            <p >Spotify Inclusion Fika: Featuring Leroy Sanchez</p>
            </div><div className="p2 p1">
            <p>SSpotify ERG Spotlight: Able</p></div></div></div>
        </div></div>
    </div>

</div>)}}
    </Media>
   </div>
  )
}

export default Box5