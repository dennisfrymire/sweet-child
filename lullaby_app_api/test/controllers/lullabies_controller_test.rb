require 'test_helper'

class LullabiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lullaby = lullabies(:one)
  end

  test "should get index" do
    get lullabies_url, as: :json
    assert_response :success
  end

  test "should create lullaby" do
    assert_difference('Lullaby.count') do
      post lullabies_url, params: { lullaby: { album: @lullaby.album, artist: @lullaby.artist, image: @lullaby.image, lyrics: @lullaby.lyrics, title: @lullaby.title, vid_link: @lullaby.vid_link } }, as: :json
    end

    assert_response 201
  end

  test "should show lullaby" do
    get lullaby_url(@lullaby), as: :json
    assert_response :success
  end

  test "should update lullaby" do
    patch lullaby_url(@lullaby), params: { lullaby: { album: @lullaby.album, artist: @lullaby.artist, image: @lullaby.image, lyrics: @lullaby.lyrics, title: @lullaby.title, vid_link: @lullaby.vid_link } }, as: :json
    assert_response 200
  end

  test "should destroy lullaby" do
    assert_difference('Lullaby.count', -1) do
      delete lullaby_url(@lullaby), as: :json
    end

    assert_response 204
  end
end
