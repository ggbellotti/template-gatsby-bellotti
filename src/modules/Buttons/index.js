import * as S from "./style"

import React, { Component } from "react"

class LinkTransition extends Component {
  render() {
    return (
      <S.LinkTransition
        cover
        bg="var(--main-color)"
        to={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
        className={this.props.className}
        key={this.props.key}
      >
        {this.props.title ? this.props.title : this.props.children}
      </S.LinkTransition>
    )
  }
}

class LinkAnchor extends Component {
  render() {
    return (
      <S.LinkAnchor
        to={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
        className={this.props.className}
        key={this.props.key}
      >
        {this.props.title ? this.props.title : this.props.children}
      </S.LinkAnchor>
    )
  }
}

class LinkNormal extends Component {
  render() {
    return (
      <S.LinkNormal
        href={this.props.to ? this.props.to : "/"}
        title={this.props.title ? this.props.title : this.props.text}
        className={this.props.className}
        key={this.props.key}
      >
        {this.props.title ? this.props.title : this.props.children}
      </S.LinkNormal>
    )
  }
}

export { LinkTransition, LinkNormal, LinkAnchor }
