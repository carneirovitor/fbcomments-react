import React, { Component } from 'react';
import PostItem from '../components/PostItem';
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Vitor Carneiro",
          avatar: "https://scontent.fqsc1-1.fna.fbcdn.net/v/t1.0-9/p960x960/57052957_2363182997046028_5416056921075482624_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=mAPYiX5xwWgAX_3AwCZ&_nc_ht=scontent.fqsc1-1.fna&_nc_tp=6&oh=c33b09353b4ad7ae51e8487a19789fd7&oe=5EEC561C"
        },
        date: "28 Feb 2020",
        content: "Alguém afim de formar uma banda?",
        comments: [
          {
            id: 2,
            author: {
              name: "Kiko Loureiro",
              avatar: "https://static-media.hotmart.com/ClrrMMNo9kvhB-8b5r8367PH3uQ=/280x280/smart/filters:format(jpg):background_color(white)/hotmart/product_contents/57987e4c-8871-4677-9eab-92255cece2fa/kikoloureiroguitarristaavatar.png"
            },
            content: "Estamos formando uma banda de garagem, falta um guitarrista, topa?"
          },
          {
            id: 3,
            author: {
              name: "Vitor Carneiro",
              avatar: "https://scontent.fqsc1-1.fna.fbcdn.net/v/t1.0-9/p960x960/57052957_2363182997046028_5416056921075482624_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=mAPYiX5xwWgAX_3AwCZ&_nc_ht=scontent.fqsc1-1.fna&_nc_tp=6&oh=c33b09353b4ad7ae51e8487a19789fd7&oe=5EEC561C"
            },
            content: "WTF????"
          },
        ]
      },
      {
        id: 2,
        author: {
          name: "Vitor Carneiro",
          avatar: "https://scontent.fqsc1-1.fna.fbcdn.net/v/t1.0-9/p960x960/57052957_2363182997046028_5416056921075482624_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=mAPYiX5xwWgAX_3AwCZ&_nc_ht=scontent.fqsc1-1.fna&_nc_tp=6&oh=c33b09353b4ad7ae51e8487a19789fd7&oe=5EEC561C"
        },
        date: "27 Feb 2020",
        content: "Bear market a vista!? Quem comprou topo histórico aí?",
        comments: [
          {
            id: 2,
            author: {
              name: "Rafael Ferri",
              avatar: "https://www.sunoresearch.com.br/wp-content/uploads/2019/07/rafael-ferri.jpg"
            },
            content: "Eu avisei! Pra cima TradersClub."
          },
          {
            id: 3,
            author: {
              name: "Luiz Barsi",
              avatar: "https://www.sunoresearch.com.br/wp-content/uploads/2015/05/luiz_barsi_hero.png"
            },
            content: "Estou adorando essa queda. Quando as oportunidades aparecem, você compra!!"
          },
          {
            id: 4,
            author: {
              name: "Jorge Paulo Lehman",
              avatar: "data:image/jpeg;base64,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"
            },
            content: "Lembrando que esse vírus não tem nada a ver com a marca de cerveja ein!"
          },
          /*{
            id: 5,
            author: {
              name: "Jair Bolsonaro",
              avatar: "https://i.ibb.co/9Yxj4Br/biroliro.png"
            },
            content: "A culpa é do PT!!"
          },*/
        ]
      },
      {
        id: 3,
        author: {
          name: "Vitor Carneiro",
          avatar: "https://scontent.fqsc1-1.fna.fbcdn.net/v/t1.0-9/p960x960/57052957_2363182997046028_5416056921075482624_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=mAPYiX5xwWgAX_3AwCZ&_nc_ht=scontent.fqsc1-1.fna&_nc_tp=6&oh=c33b09353b4ad7ae51e8487a19789fd7&oe=5EEC561C"
        },
        date: "27 Feb 2020",
        content: '"Estude qualquer pessoa reconhecida como um sucesso permanente e você descobrirá que ela tem um objetivo principal definido, um plano para a realização desse objetivo e que ela dedica a maior parte de seus pensamentos e esforços para a realização dessa meta." - Carnegie, Andrew',
        comments: [
          {
            id: 2,
            author: {
              name: "Bill Gates",
              avatar: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg"
            },
            content: "Hey, esse cara é fera!"
          },
        ]
      },
    ]
  };
  render() {
    return(
      <div className="post-list">
        {this.state.posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
