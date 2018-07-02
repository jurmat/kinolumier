import React, { Component } from 'react';


class Modalinfo extends Component {
	render() {
		return (
			<div className="wrapper">
				<div className="Modalinfo clearfix">
					<div className="Modalinfo__img">
						<img src="http://www.kinolumiere.com/img/poster_55957.jpg" alt="post"/>
					</div>
					<div className="Modalinfo__value">
						<div className="Modalinfo__title">
							Першому гравцю приготуватися
						</div>
						<div className="Modalinfo__param">
							Рік: 
							<span> 2018 </span>
						</div>
						<div className="Modalinfo__param">
							Країна:
							<span> CША </span>
						</div>
						<div className="Modalinfo__param">
							Режисер: 
							<span> Франк Ґастамбід </span>
						</div>
						<div className="Modalinfo__param">
							Жанр: 
							<span> бойовик, комедія, кримінал </span>
						</div>
						<div className="Modalinfo__param">
							Прем’єра (в Україні): 
							<span> 2018-04-19 </span>
						</div>
						<div className="Modalinfo__param">
							Прем’єра (у світі)
							<span> 2018-04-19 </span>
						</div>
						<div className="Modalinfo__param">
							Тривалість:
							<span> 108 хв </span>
						</div>
						<div className="Modalinfo__param">
							Вікові обмеження (років):
							<span> 12 </span>
						</div>
					</div>
					<div className="Modalinfo__Modalinfo__actors">
						В ролях:
						<span>
							Сабріна Уазані, Бернар Фарсі, Франк Ґастамбід, Малік Бенталья, Сальваторе Еспозіто, Едуар Монтут, Санд Ван Рой
						</span>
					</div>
				</div>
			</div>
		);
	}
}


export default Modalinfo;
