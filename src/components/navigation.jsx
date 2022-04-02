export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            UTTN : UTT x Telecom Nancy
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Ecole Part.
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                À Propos
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Programme
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Partenaires
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Devenir Partenaire
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
