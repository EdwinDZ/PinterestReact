function getImgs() {
  return JSON.parse(localStorage.getItem('imgs'));
}

export function getImgById(id) {
  const imgs = JSON.parse(localStorage.getItem('imgs'));
  return imgs.find(p => p.id === id) || {};
}

export function getImgComment(commentaire) {
  const imgs = JSON.parse(localStorage.getItem('imgs'));
  return imgs.find(p => p.commentaire === commentaire) || {};
}