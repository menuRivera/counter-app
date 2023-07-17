import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useState } from 'react';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

// Vibration 
const vibrate = async () => {
	await Haptics.impact({ style: ImpactStyle.Light })
}

const Home: React.FC = () => {
	const [count, setCount] = useState<number>(0)


	const increment = async (mult = 1) => {
		vibrate()
		setCount(v => v += (mult * 1))
	}
	const decrement = async (mult = 1) => {
		vibrate()
		setCount(v => v -= (mult * 1))
	}

	const reset = async () => {
		vibrate()
		setCount(0)
	}

	return (
		<IonPage>
			<IonHeader>
				{/* <IonToolbar> */}
				{/* <IonTitle>Counter</IonTitle> */}
				{/* </IonToolbar> */}
			</IonHeader>
			<IonContent fullscreen>
				<IonGrid>
					<IonRow>
						<strong>{count}</strong>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton fill='outline' onClick={() => decrement()}>-1</IonButton>
						</IonCol>
						<IonCol>
							<IonButton id='reset-button' color='danger' onClick={vibrate}>Reset</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton className='bigger' onClick={() => increment()}>+1</IonButton>
						</IonCol>
						<IonCol>
							<IonButton className='bigger' onClick={() => increment(2)}>+2</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton className='bigger' onClick={() => increment(4)}>+4</IonButton>
						</IonCol>
						<IonCol>
							<IonButton className='bigger' onClick={() => increment(6)}>+6</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

			<IonAlert header='Reset counter?' trigger='reset-button' buttons={
				[
					{
						text: 'Cancel',
						role: 'cancel',
						handler: () => { console.log('cancel') },
					},
					{
						text: 'Reset',
						role: 'confirm',
						handler: () => {
							reset()
						},
					}
				]
			}></IonAlert>
		</IonPage>
	);
};

export default Home;
