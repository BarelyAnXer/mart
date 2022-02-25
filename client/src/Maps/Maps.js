import styles from "./Maps.css"

import maps from "./map.jpg"

export default function Maps() {
    return (
        <>
            <div className="container-fluid mt-3 mb-5">
                <section className="mb-4">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-6">
                                <div id="map-within-card-2" className={styles.mapContainer} style={{height: '400px'}}>
                                    <div className={styles.gmap_canvas}>
                                        <iframe width={500} height={400} id="gmap_canvas" title="unique"
                                                src={maps}
                                                frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-md-4 mx-auto align-self-center py-4">
                                <h6 className="font-weight-bold grey-text text-uppercase small">Head Office</h6>
                                <h5 className="font-weight-normal mb-4">CTU TUBURAN</h5>
                                <p className="text-muted font-weight-light">2651 Main Street, Suit 124<br/>BRGY. 8 ,
                                    TUBURAN, CEBU </p>
                                <p className="text-muted font-weight-light mb-0">Phone: +1 987 123 6548<br/>Email:
                                    Martronnel@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Block Content */}
            </div>

        </>
    )
}