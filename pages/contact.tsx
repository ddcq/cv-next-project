import React, { ReactElement } from 'react'
import { Text, TextContainer } from 'react-md'

export default function Contact(): ReactElement {
  return (
    <TextContainer>
      <Text type="headline-5">Me Contacter</Text>
      <hr/>
      <Text type="headline-6">Mail</Text>
      <p>declercq.denis@free.fr</p>
      <div className="footer-above">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
            </div>
          </div>
          <div className="row">
            <div className="footer-col col-md-4">
              <h3>Mail</h3>
              <p>declercq.denis@free.fr</p>
            </div>
            <div className="footer-col col-md-4">
              <h3>Around the Web</h3>
              <ul className="list-inline around-web">
                <li>
                  <a href="http://ca.linkedin.com/in/denis-declercq-bb6b298" className="btn-social">
                    <span className="title">LinkedIn</span>
                    <span className="icon"> <i className="fa fa-fw fa-linkedin"></i> </span>
                  </a>
                </li>
                <li>
                  <a href="http://www.viadeo.com/p/0021epf6mkaedrhk" className="btn-social">
                    <span className="title">Viadeo</span>
                    <span className="icon"> <i className="fa fa-fw fa-viadeo"></i> </span>
                  </a>
                </li>
                <li>
                  <a href="http://plus.google.com/u/0/+DenisDECLERCQ" className="btn-social">
                    <span className="title">Google+</span>
                    <span className="icon"> <i className="fa fa-fw fa-google"></i> </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4">
              <h3>CV à télécharger</h3>
              <ul className="list-inline resume">
                <li>
                  <a href="resume/CV - Denis Declercq.docx" className="btn-social">
                    <span className="description"><i className="fa fa-file-word-o"></i> Word</span>
                  </a>
                </li>
                <li>
                  <a href="resume/CV - Denis Declercq - light.docx" className="btn-social">
                    <span className="description"><i className="fa fa-file-word-o"></i> Word (version
										light)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-below">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              Copyright © Denis Declercq 2020
					</div>
          </div>
        </div>
      </div>
    </TextContainer>
  )
}
