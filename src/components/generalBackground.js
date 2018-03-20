import React, { PureComponent } from 'react';
import { isEqual } from 'lodash/isEqual';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tabs, Tab } from 'native-base';
import GameScreen from '../test-folder-for-future-game';
import RoundButton from './roundButton';

export default class GeneralBackground extends PureComponent {
    static navigationOptions = {
          header: null
    };

    remote = 'https://besthqwallpapers.com/Uploads/15-12-2016/10947/thumb2-fsociety-mask-4k-black-background.jpg';

    render() {
        return (
            <ImageBackground
                style={{ flex: 1 }}
                source={{ uri: this.remote }}
            >
                {
                    this.props.onBackPress && (
                        <View>
                            <Header>
                                <Left>
                                    <Button
                                        transparent
                                        onPress={this.props.onBackPress}
                                    >
                                        <Icon name="arrow-back" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Title>{this.props.headerTitle}</Title>
                                </Body>
                                <Right/>
                            </Header>
                        </View>
                    )
                }
                <View style={styles.MainContainer}>
                    {
                      !this.props.hasTabs && this.props.buttonProps.map((b, i) => <RoundButton key={i} buttonProps={b}/>)
                    }
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});
