import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants';
import StarRating from 'react-native-star-rating';

export default function card({ data }) {
  const { review_by, review_profileImg, reviews, rating, businessName } = data;
  return (
    <View
      style={{
        padding: 55,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        ...SHADOWS.dark,
        margin: 10,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 10,
          }}
          source={{
            uri: review_profileImg,
          }}
        />
        <StarRating starSize={25} fullStarColor='orange' rating={rating} />
        <Text style={{ marginLeft: 6 }}>{rating.toFixed(1)}</Text>
      </View>

      <View
        style={{
          marginBottom: 20,
        }}
      >
        <Text>
          <Text
            style={{
              fontWeight: 'bold',
            }}
          >
            {review_by}
          </Text>{' '}
          reviewed{' '}
          <Text
            style={{
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          >
            {businessName}
          </Text>
        </Text>
      </View>

      <Text
        style={{
          fontWeight: '400',
          lineHeight: '22px',
        }}
      >
        "{reviews}"
      </Text>
    </View>
  );
}
