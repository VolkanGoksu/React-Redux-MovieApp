import React, { Component } from 'react'
import ActorList from '../ActorList'
class HomePage extends Component {
    state = {
        actors: [{
            name: "Scott Adkins",
            description: "17 Haziran 1976'da Sutton, Coldfield, İngilterede doğmuştur.10 yaşında judoya başlamıştır. Bruce Lee ve Jean-Claude Van Damme gibi yıldızlar idolüdür.",
            photo: "https://tr.web.img4.acsta.net/c_310_420/pictures/17/09/14/01/04/4164229.jpg"
        },
        {
            name: "Sylvester Stallone",
            description: "Michael Sylvester Gardenzio Stallone 6 Temmuz 1946 New York doğumlu İtalyan asıllı Amerikalı oyuncu, senarist ve yönetmen. ",
            photo: "https://tr.web.img2.acsta.net/c_310_420/medias/nmedia/18/35/19/94/19493884.jpg"
        },
        ]
    }
    render() {
        return (
            <div>
                <ActorList actors={this.state.actors} />
            </div>
        )
    }
}

export default HomePage