import React from 'react'
import styles from '../css/slidebar.module.css'

export default function SlideBar(){
        window.addEventListener('DOMContentLoaded', () => {
            const $containerFixed = document.querySelector(`.${styles['container-fixed']}`)
            window.innerWidth >= 1500 ?
            $containerFixed.innerHTML += `<div class=${styles["container-move"]}>${document.querySelectorAll(`.${styles["container-move"]}`)[1].innerHTML}</div>`  
            : null
            let $itemMove0 = document.querySelectorAll(`.${styles["container-move"]}`)[0]
            let $itemMove1 = document.querySelectorAll(`.${styles["container-move"]}`)[1]
            let $itemMove2 = document.querySelectorAll(`.${styles["container-move"]}`)[2]
            let $itemMove3 = document.querySelectorAll(`.${styles["container-move"]}`)[3] || null
            
            const oneBound = $itemMove0.getBoundingClientRect().x
        
            let count = 0
            let conf = true
        
            $containerFixed.addEventListener('click', () => {
                conf = false})
            $containerFixed.addEventListener('mouseout', () => {conf = true})
            
            setInterval(()=> {
                if(conf){
                    let threeBound = $itemMove2.getBoundingClientRect().x
                    if(threeBound <= oneBound){
                        $itemMove0.style.transform = `translate(${0}px)`
                        $itemMove1.style.transform = `translate(${0}px)`
                        $itemMove2.style.transform = `translate(${0}px)`
                        $itemMove3 ? $itemMove3.style.transform = `translate(${0}px)` : null
                        count = 0
                    }
                    else{
                        $itemMove0.style.transform = `translate(-${count}px)`
                        $itemMove1.style.transform = `translate(-${count}px)`
                        $itemMove2.style.transform = `translate(-${count}px)`
                        $itemMove3 != null ? $itemMove3.style.transform = `translate(-${count}px)` : null
                        count += 0.1
                    }
                }
            }, 3) 
        })
        
    return (
        <>
            <div className={`${styles['container-fixed']}`}>
                <div className={styles["container-move"]}>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`"${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image1.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image2.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image3.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image4.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image5.jpg" alt="" />
                            </div>
                        </div>
                </div>
                <div className={styles["container-move"]}>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`"${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image6.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image7.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image8.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image9.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image10.jpg" alt="" />
                            </div>
                        </div>
                </div>
                <div className={styles["container-move"]}>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`"${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image1.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image2.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image3.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image4.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles["container-box"]} ${styles["box-grow"]}`}>
                            <div className={`${styles["item"]} ${styles["item-title"]}`}>
                                1
                            </div>
                            <div className={`${styles["item"]} ${styles["item-img"]}`}>
                                <img src="/media/image5.jpg" alt="" />
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}