import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Study extends React.Component {
  render () {
    return (
      <div>
        <img src='/images/bg-stars.png' className='stars-background'/>
        <div className='page-section'>
          <div className='study'>

            <div className='type-section'>
              <div className='page-title-font'>Study {this.props.match.params.type}</div>
              <div className='p-class'>Guess what? We've picked out the top courses in New Zealand, and their available grants!</div>
              <br />
              {this.props.typeDetails.study.map(detail => (
                <div key={detail.study_id}>
                  <a href={detail.link} target='_blank'>{detail.course}</a>
                  <p>{detail.provider}</p>
                  {this.props.typeDetails.location.filter(location => {
                    return (location.study_id === detail.study_id)
                  }).map(location => (
                    <span key = {location.location_id}>{location.location} </span>
                  ))}
                  <br />
                  <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study/${detail.course}`}>
                    <button>Available Grants</button>
                  </Link>
                </div>
              )
              )}
            </div>
          </div>
        </div>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    typeDetails: state.typeDetails
  }
}

export default connect(mapStateToProps)(Study)
