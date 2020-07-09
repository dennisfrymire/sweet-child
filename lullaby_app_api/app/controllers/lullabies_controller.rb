class LullabiesController < ApplicationController
  before_action :set_lullaby, only: [:show, :update, :destroy]

  # GET /lullabies
  def index
    @lullabies = Lullaby.all

    render json: @lullabies
  end

  # GET /lullabies/1
  def show
    render json: @lullaby
  end

  # POST /lullabies
  def create
    @lullaby = Lullaby.new(lullaby_params)

    if @lullaby.save
      render json: @lullaby, status: :created, location: @lullaby
    else
      render json: @lullaby.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lullabies/1
  def update
    if @lullaby.update(lullaby_params)
      render json: @lullaby
    else
      render json: @lullaby.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lullabies/1
  def destroy
    @lullaby.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lullaby
      @lullaby = Lullaby.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def lullaby_params
      params.require(:lullaby).permit(:title, :artist, :album, :lyrics, :image, :vid_link)
    end
end
