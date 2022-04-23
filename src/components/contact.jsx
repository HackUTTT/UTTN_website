import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: 'HackUTT',
  email: 'hackutt@utt.fr',
  message: '',
}

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Soutenir l'évènement</h2>
                <p>
                  <br />
                  Vous aimez le projet et vous souhaitez nous aider ? Vous voulez y participer activement ? Donner des conférences ? <br />
                  N'hésitez plus et devenez un de nos partenaires ! <br /><br />
                  Pour se faire, rien de plus simple : envoyez nous un e-mail en nous indiquant comment vous souhaitez nous aider et/ou rendez-vous sur notre page tipee pour nous soutenir financièrement en cliquant sur le bouton juste en-dessous !
                </p>
                  {/* <ul>
                    <li>    - Contribuer uniquement au coût de l'organisation de l'évènement en effectuant un don (Agents de sécurité, Nourriture, ...) sur la plateforme ci-dessous.</li>
                    <li>    - Contribuer financièrement au coût de l'évènement et demander un créneau de conférence où vous pourrez présenter votre entreprise et un sujet de cybersécurité de votre choix (à définir avec nous pour éviter les redondances).</li>
                  </ul> */}
                {/* <p>Dans les deux cas, vous apparaitrez sur la liste de nos sponsors (modalités à définir par mail).</p> */}
              </div>
              {/* <form name='sentMessage' validate onSubmit={windows.location.href = "https://www.patreon.com/hackutt"}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      /> 
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
  <div id='success'></div> */}
                <a href='https://www.patreon.com/hackutt' target="_blank">
                <button type='submit' className='btn btn-custom btn-lg'>
                  Soutenir le projet
                </button></a>
              {/* </form> */}
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Informations de Contact</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Adresse
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            {/* <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div> */}
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : '/'}>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
