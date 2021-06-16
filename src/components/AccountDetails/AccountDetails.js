import React from 'react'
import firebase from '../firebase'

import './index.css'
import { Icon } from "semantic-ui-react";

function AccountDetails(props) {

	if(!firebase.getCurrentUsername()) {
		alert('please login first')
		props.history.replace('/login')
		return null
	}


	return (
		<div>
		<div id="user_name_display">	<Icon id="smallestIcon" className="circle user icon" size="large"></Icon><h1 id="user_name_display">{ firebase.getCurrentUsername() }</h1></div>
		
		<p className="p"> Upload Instrumental</p>
		<form className="instrumentals_upload_form">
		
		
			   <input id="instrumentals_file" type="file"></input>
			   <label className="label_1">Exlusive Price</label>
			   <input className="price" type="number" min="0.01" step="0.01" max="2500" value="00.00" />
			   <label className="label">Non-Exlusive Price</label>
			   <input className="price" type="number" min="0.01" step="0.01" max="2500" value="00.00" />
			  <br></br>
			  <button
			  type="submit"
			  fullWidth
			  variant="contained"
			  id="register_login"
			  to="/signup"
			   >
			  Submit Instrumental
			</button>
			<button
			type="submit"
			fullWidth
			onClick={logout}
			variant="contained"
			id="register_login"
			to="/signup"
			 >
			Log Out
		  </button>
			   </form>

			  
		</div>
	)

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default AccountDetails
