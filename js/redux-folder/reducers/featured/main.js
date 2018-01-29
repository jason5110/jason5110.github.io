
//accountManager
//KEY: User
export default function featured_main_state(state = {
  key: 'featured_main',
  featured: temp_featured,
}, action) {
  
  if (action.key !== state.key){
    return state
  }

  return {
    ...state,
    featured: action.featured
  }
}

//temp 
temp_featured = {
  "featured": {
    "news_array": [{
        "id": "1",
        "title": "1",
        "dateString": "2017.08.07",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": "2",
        "title": "2",
        "dateString": "2017.08.07",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": "3",
        "title": "3",
        "dateString": "2017.08.07",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": "4",
        "title": "4",
        "dateString": "2017.08.07",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": "5",
        "title": "5",
        "dateString": "2017.08.07",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }],
    "brand_array": [{
        "id": 1,
        "title": "adidas",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": 2,
        "title": "nike",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": 3,
        "title": "dada",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": 4,
        "title": "keds",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": 5,
        "title": "Fake1. keds",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }],
    "recommend_array": [
    {
        "id": 1,
        "title": "NIKE",
        "subTitle": "AIR FORCE 1 MID 07",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": 2,
        "title": "ADIDAS",
        "subTitle": "AIR FORCE 1 MID 07",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": 3,
        "title": "PUMA",
        "subTitle": "AIR FORCE 1 MID 07",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": 4,
        "title": "Fake1. NIKE",
        "subTitle": "AIR FORCE 1 MID 07",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }, {
        "id": 5,
        "title": "Fake2. NIKE",
        "subTitle": "AIR FORCE 1 MID 07",
        "image": "https://drive.google.com/uc?id=1PCKiDhowPfvAnKF_HliCPUKvs8WRXXcO"
    }]
  }
}

