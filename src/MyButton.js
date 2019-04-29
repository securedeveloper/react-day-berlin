import React, {Component} from 'react';
import cx from 'classnames';

class MyButton extends Component {
    state = {
        isLiked: false
    };

    render() {
        return (
            <div>
                <div>
                    <h2>Like Button</h2>
                    <span className='likes-counter'>
                        <button className={this.getButtonClassName()} onClick={e => this.toggleLike()}>
                            Like | {this.state.isLiked ? '101' : '100'}
                        </button>
                    </span>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </div>
        );
    }

    toggleLike() {
        this.setState({
            isLiked: !this.state.isLiked
        });
    }

    getButtonClassName() {
        return cx('like-button', {'liked': this.state.isLiked});
    }
}

export default MyButton;
