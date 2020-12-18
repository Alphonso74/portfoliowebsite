import React from 'react'

import axios from 'axios'


class Blog extends React.Component {
    state = {
        posts: []
    }


    componentDidMount() {
        this.fetchPosts().then(this.setPosts)
    }

    fetchPosts = () => axios.get(`https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@alphonsomckenzieblog`)

    setPosts = response => {
        this.setState({
            posts: response
        })
    }

    render() {
        return (
            <div>
                <div color="is-dark" title="Medium">
                    Medium is where I ramble and rant and tell stories. I orginally was going to use it as a coding blog, I don't like having to use Gist for all my code snippets. So I created this site.
                    <br /><br />
                    <a className="button is-inverted is-outlined" href="https://medium.com/@alphonsomckenzieblog" target="_blank">
                        View My Medium
                        <span className="icon" style={{ marginLeft: 5 }}>
            </span>
                    </a>
                </div>
                <div>
                    <pre>{JSON.stringify(this.state.posts, null, 2)}</pre>
                </div>
            </div>
        )
    }
}

export default Blog

